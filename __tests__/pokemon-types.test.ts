import { BulbasaurMock, CharmanderMock, SquirtleMock } from '../src/__mocks__/pokemonMocks';
import { hasPokemonType } from '../src/utils/pokemonUtils';

describe('Pokemon Type Tests', () => {
  describe('Bulbasaur', () => {
    it('should be a Grass type', () => {
      expect(hasPokemonType(BulbasaurMock, 'Grass')).toBe(true);
    });

    it('should also be a Poison type', () => {
      expect(hasPokemonType(BulbasaurMock, 'Poison')).toBe(true);
    });

    it('should not be a Water type', () => {
      expect(hasPokemonType(BulbasaurMock, 'Water')).toBe(false);
    });
  });

  describe('Charmander', () => {
    it('should be a Fire type', () => {
      expect(hasPokemonType(CharmanderMock, 'Fire')).toBe(true);
    });

    it('should not be a Grass type', () => {
      expect(hasPokemonType(CharmanderMock, 'Grass')).toBe(false);
    });

    it('should not be a Water type', () => {
      expect(hasPokemonType(CharmanderMock, 'Water')).toBe(false);
    });
  });

  describe('Squirtle', () => {
    it('should be a Water type', () => {
      expect(hasPokemonType(SquirtleMock, 'Water')).toBe(true);
    });

    it('should not be a Fire type', () => {
      expect(hasPokemonType(SquirtleMock, 'Fire')).toBe(false);
    });

    it('should not be a Grass type', () => {
      expect(hasPokemonType(SquirtleMock, 'Grass')).toBe(false);
    });
  });

  describe('Type comparison', () => {
    it('should correctly identify the primary types of all starter Pokemon', () => {
      expect(BulbasaurMock.types[0]).toBe('Grass');
      expect(CharmanderMock.types[0]).toBe('Fire');
      expect(SquirtleMock.types[0]).toBe('Water');
    });
  });
});
