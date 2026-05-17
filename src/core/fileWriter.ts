import * as fs from "fs/promises";
import * as path from "path";

export class FileWriter {
  private outputDir: string;

  constructor(outputDir: string = "./output") {
    this.outputDir = outputDir;
  }

  async write(filename: string, content: string): Promise<string> {
    await fs.mkdir(this.outputDir, { recursive: true });
    const filePath = path.join(this.outputDir, filename);
    await fs.writeFile(filePath, content, "utf-8");
    return filePath;
  }

  async read(filename: string): Promise<string> {
    const filePath = path.join(this.outputDir, filename);
    return fs.readFile(filePath, "utf-8");
  }

  async exists(filename: string): Promise<boolean> {
    try {
      await fs.access(path.join(this.outputDir, filename));
      return true;
    } catch {
      return false;
    }
  }
}
