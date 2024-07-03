import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  email: string = '';
  message: string = '';

  constructor(private emailService: EmailService) {}

  sendEmail() {
    if (!this.email || !this.message || !this.email.includes('@')) {
      alert('Please provide a valid email and message.');
      return;
    }

    this.emailService.sendEmail(this.email, this.message).subscribe({
      next: () => {
        alert('Email sent successfully!');
        this.email = '';
        this.message = '';
      },
      error: (err) => {
        console.error('Error:', err);
        alert('There was an error sending the email. Please try again.');
      },
    });
  }
}
