import { useContext } from "react";
import { ModalContext } from "@/providers/ModalProvider";

/**
 * 모달 타입 정의
 * - confirm: 확인/취소 버튼이 있는 확인 모달
 * - alert: 확인 버튼만 있는 알림 모달
 * - error: 에러 메시지를 표시하는 모달
 *
 * 사용 예시:
 * const modal = useModal();
 *
 * // 확인 모달
 * modal.open({
 *   type: "confirm",
 *   title: "확인",
 *   description: "저장하시겠습니까?"
 * });
 *
 * // 알림 모달
 * modal.open({
 *   type: "alert",
 *   title: "알림",
 *   description: "저장되었습니다."
 * });
 *
 * // 에러 모달
 * modal.open({
 *   type: "error",
 *   title: "오류",
 *   description: "저장에 실패했습니다."
 * });
 */

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};
