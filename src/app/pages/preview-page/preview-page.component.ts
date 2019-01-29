import { ImageDetail } from './../../models/image-detail.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadRequest } from 'src/app/models/upload-request.model';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.css']
})
export class PreviewPageComponent implements OnInit {
  imageDetails: ImageDetail[] = [];
  currentItem: number = null;
  uploadRequest: UploadRequest = new UploadRequest();

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const userId = params['userId'];
      console.log(userId);

      this.uploadRequest.title = params['title'];
      this.uploadRequest.description = params['description'];
      this.uploadRequest.date = new Date(params['date']);
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files.length) {
      const filesAmount = event.target.files.length + this.imageDetails.length;
      if (filesAmount <= 5) {
        for (let i = 0; i < event.target.files.length; i++) {
          const reader = new FileReader();

          reader.onload = targetEvent => {
            const target = targetEvent.target as any;
            this.imageDetails.push({
              image: target.result,
              file: event.target.files[i],
              type: event.target.files[i].type,
              name: event.target.files[i].name,
              size: event.target.files[i].size,
              isValid: this.isValidImage(event.target.files[i])
            });

            this.currentItem = this.imageDetails.length - 1;
          };

          reader.readAsDataURL(event.target.files[i]);
        }
      } else {
        alert('no more than 5 images');
      }
    }
  }

  onReplaceFile(event, i) {
    const reader = new FileReader();

    reader.onload = targetEvent => {
      const target = targetEvent.target as any;
      this.imageDetails[i] = {
        image: target.result,
        file: event.target.files[0],
        type: event.target.files[0].type,
        name: event.target.files[0].name,
        size: event.target.files[0].size,
        isValid: this.isValidImage(event.target.files[0])
      };
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  isValidImage(imagefile): boolean {
    if (imagefile.size > 10485760) {
      return false;
    }

    if (
      !(
        imagefile.type === 'image/jpeg' ||
        imagefile.type === 'image/gif' ||
        imagefile.type === 'image/png'
      )
    ) {
      return false;
    }

    return true;
  }

  deleteImage(index: number) {
    this.imageDetails.splice(index, 1);

    if (!this.imageDetails.length) {
      this.currentItem = null;
    } else if (this.currentItem >= index) {
      this.currentItem = this.currentItem - 1;
    }
  }

  replaceImage(replaceImage) {
    replaceImage.click();
  }

  submit() {
    const hasValidImages = this.imageDetails.find(image => image.isValid);
    if (!hasValidImages) {
      alert('Please select valid images');
      return;
    }

    const formData = new FormData();
    formData.append('date', this.uploadRequest.date.toString());
    formData.append('description', this.uploadRequest.description);
    formData.append('title', this.uploadRequest.title);

    this.imageDetails.forEach((image, i) => {
      formData.append('images[' + i + ']', image.file);
    });

    const params = new HttpParams();
    debugger;

    const req = new HttpRequest('POST', 'http://localhost/sogo/2/image-uploader/upload.php', formData,{
params: params,
reportProgress: true,
responseType: 'text'
});
    return this.http.request(req).subscribe();
  }
}
