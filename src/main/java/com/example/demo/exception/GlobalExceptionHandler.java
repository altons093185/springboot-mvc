package com.example.demo.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import com.example.demo.response.ApiResponse;

// 利用 @ControllerAdvice 的特性來處理全局錯誤
@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler({ MethodArgumentTypeMismatchException.class, MethodArgumentNotValidException.class })
	public ResponseEntity<ApiResponse<Object>> MethodArgumentTypeMismatchException(Exception e) {
		// MethodArgumentTypeMismatchException
		// NoResourceFoundException
		String errorMessage = e.toString();
		errorMessage = "參數錯誤(" + e.getClass().getSimpleName() + ")";
		ApiResponse<Object> apiResponse = ApiResponse.error(errorMessage);
		return ResponseEntity.badRequest().body(apiResponse);
	}

	@ExceptionHandler(NoResourceFoundException.class)
	public ResponseEntity<ApiResponse<Object>> NoResourceFoundException(Exception e) {
		// MethodArgumentTypeMismatchException
		// NoResourceFoundException
		String errorMessage = e.toString();
		errorMessage = "查無網頁(" + e.getClass().getSimpleName() + ")";
		ApiResponse<Object> apiResponse = ApiResponse.error(errorMessage);
		return ResponseEntity.badRequest().body(apiResponse);
	}

	// 當系統發生例外錯誤
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ApiResponse<Object>> othersException(Exception e) {
		String errorMessage = e.toString();
		errorMessage = "其他錯誤(" + e.getClass().getSimpleName() + ")";
		ApiResponse<Object> apiResponse = ApiResponse.error(errorMessage);
		return ResponseEntity.badRequest().body(apiResponse);
	}
}