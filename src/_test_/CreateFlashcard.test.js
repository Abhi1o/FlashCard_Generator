import {
  render,
  screen,
  cleanup,
} from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";

import store from "../store/store"
import CreateFlashcard from "../Pages/CreateFlashcard";


const data = (component) =>
  render(<Provider store={store}>{component}</Provider>);
afterEach(() => {
  cleanup();
});
describe(CreateFlashcard, () => {
  beforeEach(() => {
    data(<CreateFlashcard />);
  });

  test('should be group name', () => {
      const groupname=screen.getByLabelText(/Create Group*/i)
      expect(groupname).toBeInTheDocument()
  })
  test("should be  group description",()=>{
      const groupdescription=screen.getByLabelText(/Add Description/i)
      expect(groupdescription).toBeInTheDocument()
  })
  test('should be image of group', () => {
      const groupImg=screen.getByText("Upload Image")
      expect(groupImg).toBeInTheDocument()
  })
  test('should be term', () => {
      const cardname=screen.getByLabelText(/Enter Term/i)
      expect(cardname).toBeInTheDocument()
  })
  test('should be definition', () => {
      const carddescription=screen.getByLabelText(/Enter Description/i)
      expect(carddescription).toBeInTheDocument()
  })
  test('should be term image', () => {
      const cardImage=screen.getByText(/Select Image/i)
      expect(cardImage).toBeInTheDocument()
   })
  test('should be add more button', () => {
      const addmorebutton=screen.getByText(/Add More/i)
      expect(addmorebutton).toHaveTextContent(/Add More/i)
  })

  test('should be create button', () => {
      const create=screen.getByRole("button",{name:"Create"})
      expect(create).toHaveTextContent(/Create/i)
  })

});

