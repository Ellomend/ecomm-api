import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadsService } from './uploads.service';

@Controller('attachments')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('attachment[]'))
  uploadFile(@UploadedFiles() attachment: Array<Express.Multer.File>) {
    console.log(attachment);
    return [
      {
        id: '883',
        original:
          'https://res.cloudinary.com/elloq/image/upload/v1665565175/srvc/prod/aatik-tasneem-7omHUGhhmZ0-unsplash%402x.png',
        thumbnail:
          'https://res.cloudinary.com/elloq/image/upload/v1665565175/srvc/prod/aatik-tasneem-7omHUGhhmZ0-unsplash%402x-thumbnail.jpg',
      },
    ];
  }
}
