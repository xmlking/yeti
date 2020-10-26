import fs from 'fs';
import glob from 'glob';
import parseMDO from 'parse-md';
import { basename } from 'path';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const asyncGlob = promisify(glob);

(async () => {
  const parseMD = parseMDO.default
  const metas = [];
  const files = await asyncGlob('apps/webapp/src/assets/blog/posts/**/*.md', {});
  for (const file of files) {
    const fileContent = await readFile(file, { encoding: 'utf8' })
    const { metadata } = parseMD(fileContent)
    metadata.route = "/home/blog/" + basename(file, ".md")
    metadata.sourceFile = file.replace("apps/webapp/src", "")
    metas.push(metadata)
  }
  await writeFile('apps/webapp/src/assets/blog/metadata.json', JSON.stringify(metas, null, 2), 'utf8');
})()



