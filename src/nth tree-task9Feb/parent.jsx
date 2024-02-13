import { useState } from "react";

const treeData = [
  {
    id: 1,
    name: "Fruit",
    children: [
      {
        id: 2,
        name: "Orange",
        children: [
          {
            id: 3,
            name: "Kinnu",
            children: [],
          },
          {
            id: 4,
            name: "Shimla Orange",
            children: [],
          },
        ],
      },
      {
        id: 5,
        name: "Apple",
        children: [
          {
            id: 6,
            name: "Green Appple",
            children: [],
          },
          {
            id: 7,
            name: "Shimla Orange",
            children: [],
          },
        ],
      },
    ],
  },
];

// Tree component
const Tree = ({ data }) => {
  const [expandedNodes, setExpandedNodes] = useState([]);

  const toggleNode = (nodeId) => {
    setExpandedNodes(
      expandedNodes.includes(nodeId)
        ? expandedNodes.filter((id) => id !== nodeId)
        : [...expandedNodes, nodeId]
    );
  };

  const renderNode = (node) => (
    <div key={node.id}>
      <div onClick={() => toggleNode(node.id)}>
        {expandedNodes.includes(node.id) ? "-" : "+"} {node.name}
      </div>
      {expandedNodes.includes(node.id) && node.children.length > 0 && (
        <div style={{ paddingLeft: `${20}px` }}>
          {node.children.map((child) => renderNode(child))}
        </div>
      )}
    </div>
  );

  return <div>{data.map((node) => renderNode(node))}</div>;
};

// App component
const App = () => (
  <div>
    <h1>Tree Grid</h1>
    <Tree data={treeData} />
  </div>
);

export default App;
