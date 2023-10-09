import ListItem from "./ListItem";

interface List {
    list : ListItem[],
    load(): void,
    save(): void,
    clearList (): void,
    addItem(ItemObj : ListItem) :void,
    removeItem (id: string) : void,
}



class FullList implements List {

    static instance : FullList = new FullList()
    
   private constructor(
        private _list: ListItem[] = []
    ){}

    get list(): ListItem[]{

        return this._list
    }
    save(): void{
        localStorage.setItem("myList", JSON.stringify(this._list))
    }
    clearList(): void {
        this._list = []
        this.save()
    }
    addItem(ItemObj: ListItem): void {
        this._list.push(ItemObj)
        this.save()
    }
    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
}


export default FullList

