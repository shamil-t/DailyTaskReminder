import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Editor } from 'ngx-editor';
import { Note } from '../types/note.type';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass'],
})
export class NotesComponent implements OnInit {
  @ViewChild('closeModal') cm!: ElementRef;
  editor: Editor;

  note: Note;
  notes: Note[] = [];

  selectedNote: Note | undefined;

  constructor() {
    this.editor = new Editor();

    this.notes = [];
    this.note = { id: 0, title: '', html: '' };
  }

  ngOnInit(): void {
    let _notes = JSON.parse(localStorage.getItem('notes')!);
    _notes ? (this.notes = _notes) : (this.notes = []);
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  saveNote() {
    this.notes.length == 0
      ? (this.note.id = 1)
      : (this.note.id = this.notes[this.notes.length - 1].id + 1);
    this.notes.push(this.note);
    this.note = { id: 0, title: '', html: '' };

    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.cm.nativeElement.click();
  }

  setNote(n: Note) {
    this.selectedNote = n;
  }

  delNote(id: number) {
    this.notes = this.notes.filter((n) => {
      return n.id != id;
    });
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
