package com.market.saas.Entity.User;
import java.time.Instant;
import java.util.UUID;

import org.springframework.data.cassandra.core.cql.PrimaryKeyType;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(value = "users")
public class User {
    @PrimaryKeyColumn(name = "id", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
    @Column(value = "id" )
    private UUID id;
    @PrimaryKeyColumn(name = "email", ordinal = 1, type = PrimaryKeyType.CLUSTERED)
    @Column
    private String email;
    @Column
    private String Nom;
    
    @Column
    private String phone_number;
    @Column
    private String address;
    @Column
    private String city;
    @Column
    private String state;
    @Column
    private String cin ;
    @Column
    private String password;
    @Column
    private Instant date_cre;
    @Column
    private Instant date_upd;
    
}
