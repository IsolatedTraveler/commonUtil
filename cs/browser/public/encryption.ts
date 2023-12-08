export function encryption(data: any) {
  if (typeof data !== "string") {
    data = JSON.stringify(data);
  }
  return {
    data,
    sstoken: JSON.stringify(
      JSON.parse(getSystemVal("encryption", [data])).data
    ),
  };
}