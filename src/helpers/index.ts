export const parseFormData = (formData: FormData) => {
  const formObj: Record<string, unknown> = {};
  formData.forEach((val, key) => {
    formObj[key] = val;
  });

  return formObj;
};
