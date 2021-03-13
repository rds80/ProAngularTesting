import { Component, HostListener } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";

@Component({
    selector: "first",
    templateUrl: "first.component.html"
})
export class FirstComponent {
    category: string='Soccer';
    highlighted: boolean = false;

    constructor(private repository: Model) {}
    
    getProducts(): Product[] {
        return this.repository.getProducts()
            .filter(p => p.category == this.category);
    }

    @HostListener('mouseenter', ['$event.type'])
    @HostListener('mouseleave', ['$event.type'])
    setHighlight(type: string) {
        this.highlighted = type == 'mouseenter';
    }
 }
