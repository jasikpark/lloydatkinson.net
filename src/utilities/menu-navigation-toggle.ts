// export class MenuNavigationToggle {
//   constructor() {
//     this.menuNavigationToggle = document.querySelector(
//       '.menu-navigation-toggle'
//     );
//     this.menuNavigation = document.querySelector('.menu-navigation');
//     this.menuNavigationToggle.addEventListener('click', () => {
//       this.menuNavigation.classList.toggle('menu-navigation--active');
//     });
//   }
// }

export class MenuNavigationToggle {
    private isOpen: boolean;

    constructor (
        private menuElement: Element,
        private menuElementOpenClass: string,
        private menuElementCloseClass: string,

        private elementCausingMenuToOpen: Element,
        private eventCausingMenuToOpen: string,

        private elementCausingMenuToClose: Element,
        private eventCausingMenuToClose: string,

        private onOpen: () => void,
        private onClose: () => void
    ) {
        this.attachEventToElement(this.elementCausingMenuToOpen, this.eventCausingMenuToOpen, () => {
            this.openMenu();
        });

        this.attachEventToElement(this.elementCausingMenuToClose, this.eventCausingMenuToClose, () => {
            this.closeMenu();
        });
    }

    private addClass (element: Element, className: string): void {
        element.classList.add(className);
    }

    private removeClass (element: Element, className: string): void {
        element.classList.remove(className);
    }

    private containsClass(element: Element, className: string): boolean {
       return element.classList.contains(className);
    }

    private toggleClass (element: Element, firstClass: string, secondClass: string) {
        if (this.containsClass(element, firstClass)) {
            this.removeClass(element, firstClass);
            this.addClass(element, secondClass);
        } else {
            this.removeClass(element, secondClass);
            this.addClass(element, firstClass);
        }
    }

    private openMenu () {
        this.addClass(this.menuElement, this.menuElementOpenClass);
        this.onOpen();
    }

    private closeMenu () {
        this.removeClass(this.menuElement, this.menuElementCloseClass);
        this.onClose();
    }

    private toggleMenu () {
        
    }

    private attachEventToElement (element: Element, event: string, callback: () => void) {
        element.addEventListener(event, callback);
    }

    // private attachEventToClosingElement (element: Element, event: string, callback: () => void) {
    //     element.addEventListener(event, callback);
    // }
}