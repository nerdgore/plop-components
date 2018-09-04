const dir = require("node-dir");
dir.subdirs(__dirname + "/templates", function(err, subdirs) {
  if (err) throw err;
  const result = subdirs
    .map(name => name.replace(__dirname + "/", ""))
    .filter((item, index, list) => index === list.lastIndexOf(item))
    .sort()
  console.log(result.join('\n'));
});
