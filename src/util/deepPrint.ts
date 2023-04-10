function bfs(obj, indent) {
    const keys = Object.keys(obj);
    const spaces = " ".repeat(indent);
    let output = "";
  
    keys.forEach((key) => {
      const value = obj[key];
  
      output += `${spaces}${key}: `;
  
      if (typeof value === "object" && value !== null) {
        output += "\n" + bfs(value, indent + 2);
      } else {
        output += `${value}\n`;
      }
    });
  
    return output;
  }
  

export function deepPrint(obj) {
    console.log(bfs(obj, 0));
}
  