import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule, HttpClientModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }

    const formData = this.loginForm.value;
    console.log('Datos enviados al backend:', formData);

    this.http.post('http://localhost:3000/api/auth/login', formData)
      .subscribe({
        next: (res: any) => {
          console.log('Login exitoso:', res);

          // Guardar token si existe
          if (res.token) {
            localStorage.setItem('token', res.token);
          }

          // Redirigir según rol
          if (res.user?.role === 1) {
            this.router.navigate(['/homeAdmin']);
          } else {
            this.router.navigate(['/homeAdmin']);
          }
        },
        error: (err) => {
          console.error('Error en login:', err);
          alert(err.error?.message || 'Error en login');
        }
      });
  }
}
