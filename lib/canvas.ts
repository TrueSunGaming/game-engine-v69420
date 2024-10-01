export function createCanvas(parent: HTMLElement = document.body): HTMLCanvasElement {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    parent.appendChild(canvas);
    
    return canvas;
}