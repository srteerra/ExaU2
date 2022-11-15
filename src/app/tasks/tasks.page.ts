import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  formTasks: FormGroup;
  listTasks: Array<any>;

  constructor(
    public fb: FormBuilder,
    private alertController: AlertController
  ) {
    this.formTasks = this.fb.group({
      task: new FormControl('', Validators.required),
    });
    this.listTasks = [];
  }

  ngOnInit() {
    console.log(localStorage.getItem('tasks'));
  }

  async presentAlert() {
    if (this.formTasks.invalid) {
      const alert = await this.alertController.create({
        header: 'Failed',
        subHeader: 'You need to fill the input',
        message: 'Try again',
        buttons: ['OK'],
        backdropDismiss: false,
      });

      await alert.present();
      return;
    } else {
      const task = this.formTasks.value;
      const newTask = task.task;

      this.listTasks.push(newTask);

      localStorage.setItem('tasks', JSON.stringify(this.listTasks));
      console.log(localStorage.getItem('tasks'));
    }
  }
}
