/* eslint-disable prefer-const */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IBook } from './book.interface';
import { BookService } from './book.service';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const { ...bookData } = req.body;
  let result = await BookService.createBook(bookData);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Book created successfully',
    data: result,
  });
});

export const BookController = {
  createBook,
};
