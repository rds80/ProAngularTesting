import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { debug } from "console";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { FirstComponent } from "../ondemand/first.component";

describe('FirstComponent', () => {
    let fixture: ComponentFixture<FirstComponent>;
    let component: FirstComponent; 
    let debugElement: DebugElement;
    let divElement: HTMLDivElement;

    let mockRepository = {
        getProducts: function() {
            return [
                new Product(1, 'test1', 'Soccer', 100),
                new Product(2, 'test2', 'Chess', 200),
                new Product(3, 'test3', 'Soccer', 100)
            ]
        }
    }
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FirstComponent],
            providers: [
                {provide: Model, useValue: mockRepository}
            ]
        });
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(FirstComponent);
            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
            console.log(debugElement);
            divElement = debugElement.children[0].nativeElement;
        })
    }));

    it('implements output property', () => {
        let highlighted: boolean;
        component.change.subscribe(value => highlighted = value);
        debugElement.triggerEventHandler('mouseenter', new Event('mouseenter'));
        expect(highlighted).toBeTruthy();
        debugElement.triggerEventHandler('mouseleave', new Event('mouseleave'));
        expect(highlighted).toBeFalsy();
    });
});