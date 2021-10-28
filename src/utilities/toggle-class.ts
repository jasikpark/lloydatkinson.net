const addClass = (element: Element, className: string) => element.classList.add(className);

const removeClass = (element: Element, className: string) => element.classList.remove(className);

const containsClass = (element: Element, className: string) => element.classList.contains(className);

export const toggleClass = (element: Element, firstClass: string, secondClass: string) => {
    if (containsClass(element, firstClass)) {
        removeClass(element, firstClass);
        addClass(element, secondClass);
    } else {
        removeClass(element, secondClass);
        addClass(element, firstClass);
    }
};

// export const toggleClassOnEvent = (element: Element | string, firstClass: string, secondClass: string, event: string) => {
//     const elementToToggle = typeof element === 'string' ? document.querySelector(element) : element;

//     elementToToggle.addEventListener(event, () => {
//         toggleClass(elementToToggle, firstClass, secondClass);
//     });
// };

// export const toggleClassOnEvent = (elementWithEvent: Element | string, element: Element | string, firstClass: string, secondClass: string, event: string) => {
//     const elementToToggle = typeof element === 'string' ? document.querySelector(element) : element;

//     elementToToggle.addEventListener(event, () => {
//         toggleClass(elementToToggle, firstClass, secondClass);
//     });
// }

export const toggleClassOnEvent = (event: string, elementWithEvent: Element | string, elementToToggle: Element | string, firstClass: string, secondClass: string) => {
    const elementWithEventToToggle = typeof elementWithEvent === 'string' ? document.querySelector(elementWithEvent) : elementWithEvent;
    const elementToToggle = typeof elementToToggle === 'string' ? document.querySelector(elementToToggle) : elementToToggle;

    elementWithEventToToggle.addEventListener(event, () => {
        toggleClass(elementToToggle, firstClass, secondClass);
    });
}