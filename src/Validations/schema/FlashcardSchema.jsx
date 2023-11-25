//Creating schema for validation of user entries
import * as Yup from "yup";

const FlashCardSchema = Yup.object().shape({
  groupid: Yup.string(),
  groupname: Yup.string()
    .max(30, "Must be less than 20 characters")
    .min(3, "Group Name Must be More Than 3 Characters")
    .required("Please, Enter Group Name"),
  groupdescription: Yup.string()
  .max(
    500,
    " Group Description must be less than 500 characters")
  .required("Please, Add Group Description!"),

  groupimg: Yup.mixed(),

  cards: Yup.array().of(
    Yup.object().shape({
      cardid: Yup.string(),
      cardname: Yup.string()
        .max(30, "Must be less than 30 characters")
        .min(3, "Card Name Must be More Than 3 Characters")
        .required("Please, Enter Card Name"),
      carddescription: Yup.string()
        .min(150, "Must be more than 150 characters")
        .max(350, " Must be less than 300 characters")
        .required(" Please, Enter Card Description"),
        cardImg:Yup.string(),
    })
  ),
  createdOn: Yup.date().default(() => new Date()),
});

export default FlashCardSchema;