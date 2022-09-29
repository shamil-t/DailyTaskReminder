import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {
  editor: Editor;
  html: '';
  constructor() { 
    this.editor = new Editor()
    this.html = ''
  }

  ngOnInit(): void {
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
