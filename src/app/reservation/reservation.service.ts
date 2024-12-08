import { Injectable } from '@angular/core';
import { Reservation } from '../modules/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl: string = 'http://localhost:3001';
  private reservations: Reservation[] = [];


  // constructor() {
  //   let savedReservations = localStorage.getItem('reservations');
  //   if (savedReservations) {
  //     this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  //   }
  // }

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
    // return this.reservations;

  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id);

    // return this.reservations.find(reservation => reservation.id === id);

  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/reservations`, reservation);

    // reservation.id = Date.now().toString();

    // this.reservations.push(reservation);
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
    // console.log(this.reservations);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id);
    // let index = this.reservations.findIndex(reservation => reservation.id === id);
    // this.reservations.splice(index, 1);
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation);
    // let index = this.reservations.findIndex(res => res.id === id);
    // this.reservations[index] = updatedReservation;
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
