import React from 'react';

export function dateFun(value){
    var  months = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
   
    return (
        <>
            Utworzono dnia {value.split(/[-,:,T]/)
                            .reverse()
                            .join('-')
                            .slice(9,19)
                            .replace('-01-', ' '+months[0]+' ')                                                                                                                        .replace('-01-', ' '+months[0]+' ')
                            .replace('-02-', ' '+months[1]+' ')
                            .replace('-03-', ' '+months[2]+' ')
                            .replace('-04-', ' '+months[3]+' ')
                            .replace('-05-', ' '+months[4]+' ')
                            .replace('-06-', ' '+months[5]+' ')
                            .replace('-07-', ' '+months[6]+' ')
                            .replace('-08-', ' '+months[7]+' ')
                            .replace('-09-', ' '+months[8]+' ')
                            .replace('-10-', ' '+months[9]+' ')
                            .replace('-11-', ' '+months[10]+' ')
                            .replace('-12-', ' '+months[11]+' ')
            } o godzinie {
            value.slice(11,-3)}
        </>
    )
}