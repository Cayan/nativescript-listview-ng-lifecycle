import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ItemPreview",
    moduleId: module.id,
    templateUrl: "./item-preview.component.html",
})
export class ItemPreviewComponent implements OnInit {
    @Input('item') item: Item;
    @Input('index') index: number;

    constructor() { }

    ngOnInit(): void {
        console.log('init ' + this.index);
    }

    ngOnChanges(changes: any) {
        console.log('changes: ' + this.index);
        console.dump(changes);
    }

    ngAfterViewInit() {
        console.log('after view init: ' + this.index);
    }
}
