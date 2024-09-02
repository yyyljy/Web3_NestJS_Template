1. event emit과 block finalize
    ```
    Event emit은 transaction이 block에 담기는 순간 발생
    
    Block finalize는 그 이후 모든 노드의 합의가 되면 완료

    따라서 event가 emit 되었어도 block reorg가 발생할 수 있음

    예외처리 방법
    -> tx hash 저장
    -> tx가 포함된 block number 확인
    -> 해당 block의 finalize 여부 확인
    -> event와 연관된 후처리 프로세스 수행
    ```