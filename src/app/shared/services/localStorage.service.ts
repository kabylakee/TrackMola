import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStorageService {
	public getData(key: string): unknown {
		return JSON.parse(localStorage.getItem(key)!);
	}

	public setData(key: string, data: unknown): void {
		localStorage.setItem(key, JSON.stringify(data));
	}
}
