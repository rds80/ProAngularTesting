import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";

@Component({
    selector: "first",
    templateUrl: "first.component.html"
})
export class FirstComponent {
    category: string='Soccer';
    highlighted: boolean = false;

    @Input('pa-model')
    model: Model;
    
    constructor(private repository: Model) {}
    
    getProducts(): Product[] {
        return this.model == null ? [] : this.model.getProducts()
            .filter(p => p.category == this.category);
    }
 }
