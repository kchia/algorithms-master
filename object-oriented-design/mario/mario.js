/**
  Define use cases:
  -

  Define core objects:
  - 

  Analyze relationships between core objects:
  - 

  Investigate actions:
  -

**/

Tree.prototype.breadthFirstSearch = function() {
	var queue = new Queue();
	var results = [];
	var tree, depth;

	queue.push({
		tree: this,
		depth: 0
	});

	while(item = queue.pop()) {
		tree = item.tree;
		depth = item.depth;

		if(filter(tree, depth)) {
			results.push(tree.value);
		}

		for(var i = 0; i < tree.children.length; i++) {
			var child = tree.children[i];
			queue.push({
				tree: child,
				depth: depth + 1;
			})
		}
	}

	return results;
}