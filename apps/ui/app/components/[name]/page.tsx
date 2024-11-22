export default async function ComponentExamplesPage({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    return <div>ComponentPage:{name}</div>;
}
