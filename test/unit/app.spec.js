describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return positive value and message', function () {
            expect(answer.calculateArea(6, 3, 1, 'Success', 'Error')).toEqual({
                area: 3,
                message: 'Success'
            });
            expect(answer.calculateArea(3, 4, 1, 'Success', 'Error')).toEqual({
                area: 1, message: 'Success'
            });
            expect(answer.calculateArea(15, 3, 2, 'Success', 'Error')).toEqual({
                area: 9,
                message: 'Success'
            });
            expect(answer.calculateArea(4, 4, -2, 'Success', 'Error')).toEqual({
                area: 12,
                message: 'Success'
            });
            expect(answer.calculateArea(6, 2, 0, 'Success', 'Error')).toEqual({
                area: 6,
                message: 'Success'});
        });

        it('should return negative value and message', function () {
            expect(answer.calculateArea(6, 4, 5, 'Success', 'Error')).toEqual({
                area: -14,
                message: 'Error'
            });
            expect(answer.calculateArea(4, 3, 2, 'Success', 'Error')).toEqual({
                area: -2,
                message: 'Error'
            });
            expect(answer.calculateArea(2, 3, 4, 'Success', 'Error')).toEqual({
                area: -5,
                message: 'Error'
            });
            expect(answer.calculateArea(4, 4, 2, 'Success', 'Error')).toEqual({
                area: -4,
                message: 'Error'
            });
            expect(answer.calculateArea(3, 4, 3, 'Success', 'Error')).toEqual({
                area: -5, message: 'Error'
            });
        });

        it('should return value - 0 and error message - Big null', function () {
            expect(answer.calculateArea(1, 1, 1, 'Success', 'Error')).toEqual({
                area: 0,
                message: 'Big null'
            });
            expect(answer.calculateArea(2, 2, 1, 'Success', 'Error')).toEqual({
                area: 0,
                message: 'Big null'
            });
            expect(answer.calculateArea(4, 4, 1, 'Success', 'Error')).toEqual({
                area: 0,
                message: 'Big null'
            });
        });

        it('should return false when args types are wrong', function () {
            expect(answer.calculateArea(6, 3, '2', 'Success', 'Error')).toEqual(false);
            expect(answer.calculateArea('6', 3, 2, 'Success', 'Error')).toEqual(false);
            expect(answer.calculateArea(6, '3', 2, 'Success', 'Error')).toEqual(false);
            expect(answer.calculateArea(1, '', '', '', '')).toEqual(false);
            expect(answer.calculateArea('', 2, '', '', '')).toEqual(false);
            expect(answer.calculateArea('', '', 3, '', '')).toEqual(false);
            expect(answer.calculateArea('', '', '', 'Success', '')).toEqual(false);
            expect(answer.calculateArea('', '', '', '', 'Error')).toEqual(false);
            expect(answer.calculateArea(1, 2, '', '', '')).toEqual(false);
            expect(answer.calculateArea(1, '', 3, '', '')).toEqual(false);
            expect(answer.calculateArea(1, '', '', 'Success', '')).toEqual(false);
            expect(answer.calculateArea(1, '', '', '', 'Error')).toEqual(false);
            expect(answer.calculateArea(1, 2, '', 'Success', '')).toEqual(false);
            expect(answer.calculateArea(1, 2, '', '', 'Error')).toEqual(false);
            expect(answer.calculateArea(1, 2, 3, 'Success')).toEqual(false);
            expect(answer.calculateArea(1, 2, 3, 'Error')).toEqual(false);
            expect(answer.calculateArea(1, 2, 3, 4, 5)).toEqual(false);
        });

        it('should return flase when is not enought params', function () {
            expect(answer.calculateArea(2, 1)).toBe(false);
            expect(answer.calculateArea(2, 'Success')).toBe(false);
            expect(answer.calculateArea()).toBe(false);
        });


    });
});
