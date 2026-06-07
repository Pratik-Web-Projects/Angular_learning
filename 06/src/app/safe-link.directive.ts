import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})

export class SafeLinkDirective{
    queryParam = input('myapp', {alias: 'appSafeLink'});
    constructor(){
        // console.log('safe link directive added');
    }
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    onConfirmLeavePage($event: MouseEvent){
        const userWantsToLeave = window.confirm('Do you want to leave the application ?');
        if(userWantsToLeave){
            const address = this.hostElementRef.nativeElement.href;
              this.hostElementRef.nativeElement.href =
                address + '?from=' + this.queryParam(); 
            return;
        }

        event?.preventDefault();
    }
}