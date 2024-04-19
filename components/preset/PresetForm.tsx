// import { Formik, Field, Form } from "formik";
// import * as Yup from "yup";

import { NewPreset, FormData } from "@/utils/actions";
import styles from "./Preset.module.scss";

// const PresetForm = () => {
//   const validationSchema = Yup.object().shape({
//     "preset-name": Yup.string()
//       .required("Preset Name is required")
//       .max(20, "Preset Name must be at most 20 characters"),
//     "preset-time1": Yup.number()
//       .required("Preset Time1 is required")
//       .positive("Preset Time1 must be a positive number")
//       .max(10, "Preset Time1 must be at most 10"),
//     "preset-time2": Yup.number()
//       .required("Preset Time2 is required")
//       .positive("Preset Time2 must be a positive number")
//       .max(120, "Preset Time2 must be at most 120"),
//     "reset-time3": Yup.number()
//       .required("Reset Time3 is required")
//       .positive("Reset Time3 must be a positive number")
//       .max(10, "Reset Time3 must be at most 10"),
//   });

//   return (
//     <div>
//       <h3>Add New Preset</h3>
//       <Formik
//         initialValues={{
//           "preset-name": "",
//           "preset-time1": "",
//           "preset-time2": "",
//           "reset-time3": "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={NewPreset}
//       >
//         {({ errors, touched, isValid, isSubmitting }) => (
//           <Form>
//             <Field name="preset-name" type="text" />
//             {errors["preset-name"] && touched["preset-name"] && (
//               <div>{errors["preset-name"]}</div>
//             )}
//             <Field name="preset-time1" type="number" />
//             {errors["preset-time1"] && touched["preset-time1"] && (
//               <div>{errors["preset-time1"]}</div>
//             )}
//             <Field name="preset-time2" type="number" />
//             {errors["preset-time2"] && touched["preset-time2"] && (
//               <div>{errors["preset-time2"]}</div>
//             )}
//             <Field name="reset-time3" type="number" />
//             {errors["reset-time3"] && touched["reset-time3"] && (
//               <div>{errors["reset-time3"]}</div>
//             )}
//             <button type="submit" disabled={!isValid || isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default PresetForm;

const PresetForm = () => {
  return (
    <div>
      <h3 className={styles.form_heading}>Add New Preset</h3>
      <form action={NewPreset}>
        <div className={styles.form_group}>
          <label htmlFor="preset-name">Preset name</label>
          <input type="text" name="name" id="preset-name" />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="preset-time1">Prep duration</label>
          <input type="number" name="time1" id="preset-time1" />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="preset-time2">Meditation duration</label>
          <input type="text" name="time2" id="preset-time2" />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="preset-time3">Rest duration</label>
          <input type="text" name="time3" id="preset-time3" />
        </div>

        <div className={styles.form_group}>
          <button className={styles.block_link} type="submit">
            Add Preset
          </button>
        </div>
      </form>
    </div>
  );
};

export default PresetForm;
