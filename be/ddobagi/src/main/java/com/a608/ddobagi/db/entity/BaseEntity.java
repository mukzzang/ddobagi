package com.a608.ddobagi.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@MappedSuperclass //JPA Entity 클래스들이 해당 추상 클래스를 상속할 경우 createDate, modifiedDate를 컬럼으로 인식
@Getter
@EntityListeners(AuditingEntityListener.class)
//해당 클래스에 Auditing 기능을 포함 (Audit은 감시하다, 감사하다라는 뜻으로 Spring Data JPA에서 시간에 대해서 자동으로 값을 넣어주는 기능)
@NoArgsConstructor
public abstract class BaseEntity {

    @CreatedDate
    @Column(name = "created_at")
    // @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    // @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime updatedAt;
}
