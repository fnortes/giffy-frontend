import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "./hook";

const setUp = (params) => renderHook(() => useForm(params));

test('should change keyword', () => {
  const { result } = setUp();

  act(() => {
    result.current.updateKeyword('batman');
  });

  expect(result.current.keyword).toBe('batman');
});

test('should use initial values', () => {
  const { result } = setUp({
    initialKeyword: 'matrix'
  });

  expect(result.current.keyword).toBe('matrix');
});

test('should update correctly times when used twice', () => {
  const { result } = setUp({
    initialKeyword: 'matrix'
  });

  act(() => {
    result.current.updateKeyword('batman');
    result.current.updateKeyword('robin');
  });

  expect(result.current.keyword).toBe('robin');
  expect(result.current.times).toBe(2);
});