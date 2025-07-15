export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  // 处理不同的路径情况
  if (!slug || slug.length === 0) {
    return (
      <div>
        <h1>文档首页</h1>
        <p>路径: /docs</p>
        <p>这是文档的根页面</p>
      </div>
    );
  }

  if (slug.length === 1) {
    return (
      <div>
        <h1>文档分类: {slug[0]}</h1>
        <p>路径: /docs/{slug[0]}</p>
        <p>这是一个文档分类页面</p>
      </div>
    );
  }

  if (slug.length === 2) {
    return (
      <div>
        <h1>具体文档</h1>
        <p>路径: /docs/{slug.join('/')}</p>
        <p>分类: {slug[0]}</p>
        <p>文档: {slug[1]}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>深层文档</h1>
      <p>路径: /docs/{slug.join('/')}</p>
      <p>路径段数量: {slug.length}</p>
      <p>所有段: {JSON.stringify(slug)}</p>
    </div>
  );
}
