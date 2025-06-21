function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

const userName = "Developer";
console.log(greet(userName));
function farewell(name: string): string {
    return `Goodbye, ${name}! See you next time.`;
}

console.log(farewell(userName));