import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  private readonly http = inject(HttpClient);
  private readonly n8nTestUrl =
    "https://tom-blrt.app.n8n.cloud/webhook-test/e04b7dce-f433-48aa-9a9e-b60b43575cd7";

  upload(file: File | undefined): Observable<any> {
    const formData = new FormData();

    if (file) {
      formData.append("file", file, file.name);
    } else {
      throw new Error("No file provided for upload.");
    }

    return this.http.post(this.n8nTestUrl, formData);
  }
}
