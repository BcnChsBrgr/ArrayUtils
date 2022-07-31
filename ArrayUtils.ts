interface UtilsArrayInterface extends Array<any> {
    bobbleSort(): Array<any> | Error | never;
}

export class ArrayUtils extends Array<any> implements UtilsArrayInterface {
    constructor(...v: any[]) {
        super();
        this.push(...v);
    }

    getNode(element: any, name?: string): any {
        if (name === undefined) {
            return element;
        }
        return element[name] === undefined ? element.get(name) : element[name];
    }

    bobbleSort(
        sort: string = "asc",
        name?: string
    ): Array<any> | Error | never {
        let _temp: Array<any> = this;

        for (let i = 0; i < _temp.length; i++) {
            for (let j = 0; j < _temp.length - i - 1; j++) {
                if (name === undefined && typeof _temp[j] === "object") {
                    throw new Error("Missing key for the object.");
                }
                let currentNode = this.getNode(_temp[j], name),
                    nextNode = this.getNode(_temp[j + 1], name);

                let swap =
                    sort === "asc"
                        ? currentNode > nextNode
                            ? true
                            : false
                        : currentNode < nextNode
                        ? true
                        : false;

                if (swap) {
                    let _tempNode = _temp[j];
                    _temp[j] = _temp[j + 1];
                    _temp[j + 1] = _tempNode;
                }
            }
        }
        return _temp;
    }
}
