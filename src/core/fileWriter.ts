import * as fs from 'fs';
import * as path from 'path';

export class FileWriter {
  async write(filename: string, content: string): Promise<string> {
    const dir = process.cwd();
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, content, 'utf-8');
    return filePath;
  }
}
