import { Component, inject, signal } from "@angular/core";
import { FileUploadService } from "src/app/services/file-upload.service";

@Component({
  selector: "app-file-upload",
  imports: [],
  templateUrl: "./file-upload.html",
  styleUrls: ["../../../styles.css", "../../app.css", "./file-upload.scss"],
})
export class FileUpload {
  private readonly fileUploadService = inject(FileUploadService);
  shortLink: string = "";
  loading: boolean = false;
  private file = signal<File | undefined>(undefined);

  onChange(event: any) {
    this.file.set(event.target.files[0]);
  }

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file()).subscribe((event: any) => {
      if (typeof event === "object") {
        this.shortLink = event.link;
        this.loading = false;
      }
    });
  }
}
