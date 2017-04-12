import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        let items = this.itemService.getItems();
        this.items = items.slice(0, 1);
        // setTimeout(() => {
        //     console.log('timeout, adding more items');
            this.items.push(...items.slice(1, 2));
        // }, 500);
    }
}
