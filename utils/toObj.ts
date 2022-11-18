export const toObject = (data: Record<string, unknown> | unknown[]) => {
  return JSON.parse(
    JSON.stringify(
      data,
      (_, value) =>
        typeof value === "bigint" ? Number(value.toString()) : value, // return everything else unchanged
    ),
  );
};
