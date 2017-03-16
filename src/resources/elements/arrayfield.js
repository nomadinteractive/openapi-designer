import {bindable, containerless} from 'aurelia-framework';
import {Basefield} from '../basefield';

@containerless
export class Arrayfield extends Basefield {
  @bindable item
  @bindable collapsed = false;
  _children = []

  init(id = '', {label = '', item = {type = 'text', id = 'arrElem'} = {}, columns = 8, collapsed = false, parent, index} = {}) {
    this.item = item;
    this.collapsed = collapsed;
    return super.init(id, {label, columns, parent, index});
  }

  get iterableChildren() {
    return Object.values(this._children);
  }

  getValue() {
    const value = [];
    for (const [index, item] of Object.entries(this._children)) {
      value[index] = item.getValue();
    }
    return value;
  }

  setValue(value) {
    this._children = [];
    for (const item of value) {
      const index = this.addChild();
      this._children[index].setValue(item);
    }
  }

  addChild() {
    const field = this.item.clone();
    field.parent = this;
    field.index = this._children.length;
    field.id = `${this.item.id}-${field.index}`;
    field.label = `${field.label} #${(field.index + 1)}`;
    this._children.push(field);
    return field.index;
  }

  deleteChild(index) {
    this._children.splice(index, 1);
    for (let i = index; i < this._children.length; i++) {
      const item = this._children[i];
      item.index = i;
      item.label = `${this.item.label} #${(i + 1)}`;
    }
  }

  clone() {
    const clone = new Arrayfield();
    clone.init(this.id, this);
    clone.item = this.item.clone();
    return clone;
  }
}
