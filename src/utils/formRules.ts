import * as yup from "yup";

const schema = yup.object().shape({
  destination: yup.string().required("*destination requise"),
  adress: yup.string().required("*adresse requise"),
  link: yup.string().required("*lien image requis"),
  population: yup
    .number()
    .integer()
    .typeError("*nombre requis")
    .positive("*doit être positif"),
  hotel: yup
    .number()
    .integer()
    .typeError("*nombre requis")
    .positive("*doit être positif"),
  income: yup
    .number()
    .integer()
    .typeError("*nombre requis")
    .positive("*doit être positif"),
  area: yup
    .number()
    .integer()
    .typeError("*nombre requis")
    .positive("*doit être positif"),
  toggle: yup.boolean(),
});

export default schema;
