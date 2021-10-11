export default function LimitationPolymorphism() {
  console.log('[制限付きポリモーフィズム]');

  type TreeNode = {
    value: string;
  };
  type LeafNode = TreeNode & {
    isLeaf: true;
  };
  type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode];
  };

  function mapNode<T extends TreeNode>(
    node: T,
    func: (value: string) => string
  ): T {
    return {
      ...node,
      value: func(node.value),
    };
  }

  const a: TreeNode = { value: 'a' };
  const b: LeafNode = { value: 'b', isLeaf: true };
  const c: InnerNode = { value: 'c', children: [b] };
  console.log(mapNode(a, (node) => node.toUpperCase()));
  console.log(mapNode(b, (node) => node.toUpperCase()));
  console.log(mapNode(c, (node) => node.toUpperCase()));
}
