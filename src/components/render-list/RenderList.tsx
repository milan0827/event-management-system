export default function RenderList<T>({
  data,
  render,
}: {
  data: T[];
  render: (t: T) => React.ReactNode;
}) {
  return data.map(render);
}
