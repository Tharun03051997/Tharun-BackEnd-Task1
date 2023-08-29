const fs = require('fs');

const content = new Date().toString().replace(/[:.]/g,'-');
const path = `./files/${content}.txt`;
function filecreate()
{
try {
  fs.writeFileSync(path, content);
  // file written successfully
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
} catch (err) {
  console.error(err);
}
}
filecreate()